# Rickfans of Mortydom

You're building a fan site for Rick and Morty lovers. The application will use data from an open source API. Your task is to use that data to design the app.

## About HTTP Client

HTTP Client allows your Angular application to communicate with other applications. Because Angular specializes in dynamically displaying data, it usually needs to fetch that data from other APIs.

HTTP Client is a built-in service for sending and receiving data.

The API offers a REST backend that can be used to access the data:
* [Rick and Morty API Official](https://rickandmortyapi.com/documentation/#rest)

## Topics

- CRUD and API anatomy
- Request objects
- Response objects
- Observables

### Requirements

- Search characters and locations
- Landing page with navigation
- List of characters
- List of locations
- Detail pages for characters
- Detail pages for locations
- Favorites list

## Stories and AC

The stories for episodes apply to characters and locations as well. Start with Episodes then implement location and characters once you get into a good workflow with`HTTPClient` and services.

**Episodes**

As a user, I can browse the episodes of Rick and Morty so that I can read about each one.
```gherkin
When I visit the home page
Then I can see a list of Rick and Morty episodes.

Given a list of episodes
When I select one episode
Then I can view the details page for it.

When I view the details page for an episode
Then I can see more details and the characters featured in it.
```
