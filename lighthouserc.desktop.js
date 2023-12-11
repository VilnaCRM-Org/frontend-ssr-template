module.exports = {
  ci: {
    collect: {
      settings: {
        preset: 'desktop',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.75 }],
        'categories:bestPractices': ['error', { minScore: 0.75 }],
        'categories:seo': ['error', { minScore: 0.75 }],
      },
    },
  },
};
