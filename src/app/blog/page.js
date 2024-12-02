import { getEntries } from '@/lib/contentful';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page || '0', 10);
  const limit = 10; // Número de posts por página
  const skip = page * limit;

  // Buscar posts do Contentful
  const data = await getEntries('blog', { limit, skip });
  const posts = data.items;

  return (
    <section className="w-screen mx-auto">
      <Header/>
    <div className="bg-slate-100 min-h-screen py-12 px-6">
       {/* Botão de voltar */}
       <div className="container mx-auto mt-12 lg:mt-20">
        <Link href="/" passHref>
          <button className="text-white mb-6 mt-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 4.293a1 1 0 011.414 1.414L8.414 10l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z" clipRule="evenodd" />
            </svg>
            Voltar
          </button>
        </Link>
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-brandBlack mb-10 text-center">
          Nosso Blog
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`https:${post.fields.image.fields.file.url}`}
                alt={post.fields.image.fields.title}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {post.fields.title}
              </h3>
              <Link
                href={`/blog/${post.fields.slug}`}
                className="text-brandBlue hover:underline"
              >
                Leia mais
              </Link>
            </div>
          ))}
        </div>

        {/* Botão para carregar mais posts */}
        {posts.length === limit && (
          <div className="text-center mt-8">
            <Link
              href={`/blog?page=${page + 1}`}
              className="bg-brandBlue text-white px-4 py-2 rounded-md"
            >
              Carregar mais
            </Link>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </section>  
  );
}
