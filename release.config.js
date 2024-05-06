module.exports = {
    branches: [
        {name: 'main'},
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/changelog", {"changelogFile": "CHANGELOG.md"}],
        ["@semantic-release/git",
            {
                "assets": ["CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }],
        // ["@semantic-release/github", {"addReleases": "bottom"}],
        ["semantic-release-helm3", {"chartPath": "./helm-app-1", "onlyUpdateVersion": "true"}]
    ],
    // publish: [
    //     "@semantic-release/github"
    // ]
};
