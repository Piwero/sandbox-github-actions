module.exports = {
    "branches": [
        "main"
    ],
    "extends": "semantic-release-monorepo",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        "@semantic-release/git",
        {
            "assets": [
                "Charts/helm-1/Chart.yaml",
                "Charts/app-2/Chart.yaml",
            ]
        }]
}