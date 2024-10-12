require('dotenv').config();

module.exports = {
  ci: {
    collect: {
      url: `${process.env.WEBSITE_URL}`,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:bestPractices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.90 }],
      },
    },
  },
};
