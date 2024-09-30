[![SWUbanner](./public/supportUkraine.svg)](https://supportukrainenow.org/)

# Template for modern SSR applications

[![CodeScene Code Health](https://codescene.io/projects/43861/status-badges/code-health)](https://codescene.io/projects/43861)
[![CodeScene System Mastery](https://codescene.io/projects/43861/status-badges/system-mastery)](https://codescene.io/projects/43861)
[![codecov](https://codecov.io/gh/VilnaCRM-Org/frontend-ssr-template/graph/badge.svg?token=MPFDUSMZ2I)](https://codecov.io/gh/VilnaCRM-Org/frontend-ssr-template)

## Possibilities

- Modern JavaScript stack for services: [React](https://react.dev/), [Next.js](https://nextjs.org/)
- A lot of CI checks to ensure the highest code quality that can be
  (Security checks, Code style fixer, static linters, DeepScan, Snyk)
- Configured testing tools: [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/)
- This template is based on [bulletproof-react](https://github.com/alan2207/bulletproof-react/tree/master)
- Much more!

## Why you might need it

Many front-end developers need to create new projects from scratch and spend a lot of time.

We decided to simplify this exhausting process and create a public template for modern
front-end applications. This template is used for all our microservices in VilnaCRM.

## License

This software is distributed under the
[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed) license.
Please read [LICENSE](https://github.com/VilnaCRM-Org/frontend-ssr-template/blob/main/LICENSE) for information
on the software availability and distribution.

### Minimal installation

You can clone this repository locally or use Github functionality "Use this template"

Install [node.js](https://nodejs.org/en/) 20 version or higher and [pnpm](https://pnpm.io/)

Use pnpm install for installing all dependencies and pnpm run dev for running application

## Using

The list of possibilities

```bash
pnpm run dev - starts application
pnpm run build - build application
pnpm lint:next - static next lint
pnpm lint:tsc - static TypeScript lint
pnpm test:e2e - end-to-end testing
pnpm test:e2e:local - open GUI with list of end-to-end test
pnpm test:unit - unit testing
pnpm lighthouse:desktop - lighthouse desktop testing
pnpm lighthouse:mobile - lighthouse mobile tesitng
```

## Documentation

Start reading at the [GitHub wiki](https://github.com/VilnaCRM-Org/frontend-ssr-template/wiki).
If you're having trouble, head for
[the troubleshooting guide](https://github.com/VilnaCRM-Org/frontend-ssr-template/wiki/Troubleshooting)
as it's frequently updated.

You can generate complete API-level documentation by running `doc` in the top-level
folder, and documentation will appear in the `docs` folder, though you'll need to have
[API-Extractor](https://api-extractor.com/) installed.

If the documentation doesn't cover what you need, search the
[many questions on Stack Overflow](http://stackoverflow.com/questions/tagged/vilnacrm),
and before you ask a question,
[read the troubleshooting guide](https://github.com/VilnaCRM-Org/frontend-ssr-template/wiki/Troubleshooting).

## Tests

[Tests](https://github.com/VilnaCRM-Org/frontend-ssr-template/actions)

If this isn't passing, is there something you can do to help?

## Repository Synchronization with Template

We have integrated an automated repository synchronization feature using the [actions-template-sync](https://github.com/marketplace/actions/actions-template-sync) GitHub Action. This allows the repository to stay in sync with a designated template repository.

### How It Works

This workflow automatically creates a pull request in this repository whenever changes are detected in the template repository, ensuring that the latest updates from the template are applied.

By default, the workflow runs every Monday at 9:00 AM UTC. You can also manually trigger it from the [GitHub Actions tab](https://github.com/VilnaCRM-Org/frontend-ssr-template/actions).

### Configuration

1. The synchronization is managed through a GitHub Actions workflow, which is triggered automatically via cron or manually.
2. The `source_repo_path` must point to the repository you want to sync from (e.g., `VilnaCRM-Org/frontend-ssr-template`).
3. Make sure you have the necessary permissions set up for the GitHub token to allow synchronization. You can learn more about [configuring permissions for GitHub Actions tokens](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token) in the official GitHub documentation.

You can see a sample configuration for the synchronization workflow, stored in [.github/workflows/template-sync.yml](https://github.com/VilnaCRM-Org/frontend-ssr-template/tree/main/.github/workflows/template-sync.yml).

### Benefits of Synchronization

Automated synchronization ensures that projects relying on this template always benefit from the latest features, improvements, and bug fixes without the need for manual intervention. This helps maintain consistency across multiple projects, reduces the likelihood of outdated code, and simplifies maintenance by automating the propagation of changes from the template.
In turn, it saves time and reduces the effort required to keep dependent projects aligned with best practices and new developments.

## Security

Please disclose any vulnerabilities found responsibly – report security issues to the maintainers privately.

See
[SECURITY](https://github.com/VilnaCRM-Org/frontend-ssr-template/tree/main/SECURITY.md)
and
[Security advisories on GitHub](https://github.com/VilnaCRM-Org/frontend-ssr-template/security).

## Contributing

Please submit bug reports, suggestions, and pull requests to the
[GitHub issue tracker](https://github.com/VilnaCRM-Org/frontend-ssr-template/issues).

We're particularly interested in fixing edge cases, expanding test coverage,
and updating translations.

If you found a mistake in the docs, or want to add something, go ahead and
amend the wiki – anyone can edit it.

## Sponsorship

Development time and resources for this repository are provided by
[VilnaCRM](https://vilnacrm.com/),
the free and opensource CRM system.

Donations are very welcome, whether in beer 🍺, T-shirts 👕, or cold, hard cash 💰.
Sponsorship through GitHub is a simple and convenient way to say "thank you" to
maintainers and contributors – just click the "Sponsor" button
[on the project page](https://github.com/VilnaCRM-Org/frontend-ssr-template).
If your company uses this template, consider taking part in the VilnaCRM's enterprise support program.

## Changelog

See [changelog](CHANGELOG.md).
