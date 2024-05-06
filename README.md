# sandbox-github-actions

# Semantic release
## Branch Naming Convention
* `feature` is for adding, refactoring or removing a feature
* `bugfix` is for fixing a bug
* `hotfix` is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
* `test` is for experimenting outside of an issue/ticket

## Commit Message Convention
- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

## Repo setup
* it's needed to add GH action token as GH_TOKEN in the repo -> repo settings = sandbox-github-actions/settings/secrets/actions
* it's needed to add Read and write permissions in Workflow permissions -> repo settings = sandbox-github-actions/settings/actions
