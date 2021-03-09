const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const { getData } = require('./http');

const typeDefs = gql`
	type Author {
		name: String
		email: String
		date: String
	}

	type Committer {
		name: String
		email: String
		date: String
	}

	type Tree {
		sha: String
		url: String
	}

	type Parent {
		sha: String
		url: String
		html_url: String
	}

	type Verification {
		verified: Boolean
		reason: String
		signature: String
		payload: String
	}

	type Commit {
		sha: String
		node_id: String
		url: String
		html_url: String
		author: Author
		committer: Committer
		tree: Tree
		message: String
		parents: [Parent]
		verification: Verification
	}

	type Query {
		commit(owner: String!, repo: String!, sha: String!): Commit
	}
`;

const resolvers = {
	Query: {
		commit: async (_, { owner, repo, sha }) => {
			return await getData(`https://api.github.com/repos/${owner}/${repo}/git/commits/${sha}`);
		},
	},
};

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: process.env.PORT }).then(({ url }) => {
	console.log(`Endpoint ready at: ${url}`);
});
