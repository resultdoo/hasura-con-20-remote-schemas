# INTEGRATING HASURA INTO AN EXISTING GRAPHQL ECOSYSTEM WITH REMOTE SCHEMAS
#### Hasura Con 2020 Tech Demo

This is a tech demo of how to use Hasura with remote joins and remote schemas as presented on Hasura Con 2020. It contains a simple blog app (backend only) where a user can insert a blog post in a table.

It contains the following:

- Hasura instance with migrations for setting up a simple post table
- Apollo GraphQL server with user registration and user query
- User service on NodeJS with MongoDB as a storage

To run it you must have Docker installed.

```bash
docker network create hasuracon20-result
docker-compose up
```
If you want to rebuild the containers do the following:
```bash
docker-compose build
```
Before running the up command.

When the project is running, run the Hasura migrations from the console:

```bash
hasura migrate apply --admin-secret hasuracon20-result
hasura metadata apply --admin-secret hasuracon20-result
```

Make sure your Hasura CLI version is v1.3.0-beta.1.

**NOTE: This is a prototype project with a Hasura build in progress. It is not meant to be run in production fully yet.**