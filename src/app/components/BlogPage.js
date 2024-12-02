import { getEntries } from '@/lib/contentful';
import Link from 'next/link';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';


export default async function BlogPage() {
  // Limitar a consulta para as 3 postagens mais recentes
  const data = await getEntries('blog', { limit: 3 });
  const posts = data.items;

  return (
    <div className="bg-brandWhite min-h-screen py-12 px-6">
      <div className="container mx-auto p">
        <h1 className="text-4xl font-bold text-brandBlack mb-10 text-center">Nosso Blog</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Post destacado */}
          <div className="lg:col-span-2 bg-white shadow-slate-900 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:shadow-brandBlue transition-shadow duration-300">
  {posts[0] && (
    <>
      {/* Imagem */}
      <img
        src={`https:${posts[0].fields.image.fields.file.url}`}
        alt={posts[0].fields.image.fields.title}
        className="w-full border-[1px] border-slate-100 h-72 lg:h-[450px] object-cover  rounded-lg mb-4"
      />

      {/* Título */}
      <h2 className="lg:text-3xl text-xl font-semibold text-slate-900 mb-4">
        {posts[0].fields.title}
      </h2>

      {/* Prévia do conteúdo */}
      {posts[0].fields.body && (
        <p className="text-slate-600 mb-4">
          {documentToPlainTextString(posts[0].fields.body).slice(0, 350)}...
        </p>
      )}

            {/* Link */}
            <Link
              href={`/blog/${posts[0].fields.slug}`}
              className="text-brandBlue hover:text-brandGreen font-thin"
            >
              Leia mais...
            </Link>
          </>
        )}
      </div>

          {/* Posts menores */}
          <div className="space-y-8">
            {posts.slice(1).map((post) => (
              <div
                key={post.sys.id}
                className="bg-white shadow-lg shadow-slate-800 rounded-lg p-6 hover:shadow-2xl hover:shadow-brandBlue transition-shadow duration-300"
              >
                <img
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.image.fields.title}
                  className="w-full border-[1px] border-slate-200 h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {post.fields.title}
                </h3>
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="text-slate-900 hover:text-brandGreen font-thin"
                >
                  Leia mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
