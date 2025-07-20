# Exercise 11.1: A CI/CD pipeline for an application written in Golang #

Linting an application in Golang can be done with golangci-lint, which supports many linters such as govet and staticcheck.
Testing can be done with Golang's built-in tool for unit tests by using its testing package and go test command.
Another possibility would be to use testify, which has more features than the testing package, making  it suitable for larger projects. Thus I would pick testify for the tests.
Building can be done with Golang's native compiler with the command go build. Docker could be used to containerize the build.

Alternatives to Jenkins and GitHub Actions include for example Gitlab CI/CD and CircleCI, which are cloud-based, and DroneCI and Tekton, which are self-hosted.
When deciding whether to pick cloud-based CI or self-hosted CI, some of the key-factors to consider are budget, resources needed, project size and customizability.
Cloud-based options often bill by build-time, which needs to be taken into account in the budget. If specific hardware is needed, self-hosting might be better.
Larger projects also might need more customizability and resources, which would make self-hosting a better option. However in this case, as the team consists of six people, a cloud-based option could suffice.
