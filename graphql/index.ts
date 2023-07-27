export const getUserQuery = `
    query GetUser($email: String!){
        user(by: {email : #$email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`

export const createUserQuery= `
    query CreateUser($input: UserCreateInput!){
        userCreate(input: $input){
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`