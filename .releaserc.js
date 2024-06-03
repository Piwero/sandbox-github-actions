module.exports = {
    "branches": [
        "main"
    ],
    "tagFormat": process.env.CHART_NAME + "-v${version}",
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
            "@semantic-release/exec",
            {
                "prepareCmd": "helm-docs",
                "publishCmd": "cr package . && cr upload -o piwero -r sandbox-github-actions -c $(git rev-parse HEAD) --release-notes-file CHANGELOG.md --push --packages-with-index --skip-existing"
            }
        ],
        [
            "semantic-release-helm3",
            {
                "chartPath": ".",
                "populateChangelog": "true",
                "onlyUpdateVersion": "true"
            }
        ],

        "@semantic-release/git",
        {
            "assets": [
                "Chart.yaml",
            ],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }]
}