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
        [
            'semantic-release-helm3',
            {
                chartPath: 'charts',
                onlyUpdateVersion: true,
            }
        ]
    ]
}