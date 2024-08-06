import React from 'react';

const learnMorePosts = [
  {
    id: 1,
    title: "The History of Coffee",
    content: "Coffee has a rich and fascinating history...",
    link: "https://www.ncausa.org/About-Coffee/History-of-Coffee"
  },
  {
    id: 2,
    title: "How to Choose the Best Coffee Bean",
    content: "Choosing the right coffee bean can make all the difference...",
    link: "https://www.instructables.com/Choosing-Coffee-Beans/"
  },
  // Add more posts here
];

function LearnMore() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Learn More About Coffee</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {learnMorePosts.map((post) => (
          <div key={post.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p>{post.content}</p>
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block p-2 bg-blue-500 text-white rounded"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearnMore;
