docker stop pgtest
docker run --rm -p 5432:5432 --name pgtest -e POSTGRES_PASSWORD=123 -v pgtest-volume:/var/lib/postgresql/data --network test --hostname pgtest postgres