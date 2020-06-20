docker stop sd
docker build -t simpledebugging:latest .
docker run --rm --network test -p 8080:8080/tcp -p 9229:9229 --name sd simpledebugging:latest