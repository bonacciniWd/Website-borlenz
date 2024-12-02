import { getEntries } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default async function BlogPost({ params }) {
  const slug = params.slug;

  // Buscando os dados do post no Contentful
  const data = await getEntries('blog');
  const post = data.items.find((item) => item.fields.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <div className="flex items-center justify-center flex-grow bg-black">
          <h1 className="text-4xl font-bold text-gray-800">Post não encontrado!</h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Extrair as tags do post (campo 'tags')
  const tags = post.fields.tags ? post.fields.tags.split(',').map(tag => tag.trim()) : [];

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-6 text-lg text-gray-800 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{children}</h2>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 pl-4 italic text-gray-700 mb-6">{children}</blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc pl-6 mb-6 text-black">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal text-brandOrange pl-6 mb-6">{children}</ol>
      ),
    },
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
     <Header/>

      {/* Conteúdo do post */}
      <div className="container mx-auto pt-24 max-w-4xl bg-white shadow-md rounded-lg p-6 flex-grow">
       {/* Botão de voltar */}
      <div className="container mx-auto lg:mt-10">
        <Link href="/" passHref>
          <button className="text-white mb-6 mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 1.414L8.414 10l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z" clipRule="evenodd" />
            </svg>
            Voltar
          </button>
        </Link>
      </div>
        <div className="mb-8">
          {post.fields.image && (
            <Image
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.image.fields.title}
              width={1200}
              height={660}
              className="rounded-lg mb-4 lg:w-screen h-auto"
            />
          )}
          <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4">{post.fields.title}</h1>
          <div className="text-sm text-gray-600">
            <span>Por Borlenz {post.fields.author}</span>
            <span> • {new Date(post.sys.createdAt).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>

        {/* Conteúdo do Post */}
        <div className="prose prose-lg max-w-none">
          {documentToReactComponents(post.fields.body, renderOptions)}
        </div>
        {/* Exibir as tags */}
        {tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Link key={index} href={`/blog/tags/${tag}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
