
module.exports = {
    "branches": [
        "main"
    ],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "charts/helm-1/CHANGELOG.md"
            }
        ],
        [
            'semantic-release-helm3',
            {
                chartPath: 'charts/helm-1',
                onlyUpdateVersion: true,
                registry: process.env.REPOSITORY_WITH_CREDS,
                isChartMuseum: true
            }
        ]
    ]
}
