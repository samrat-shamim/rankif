function createUser(root: any, args: any, context: any) {
    return context.prisma.createUser({
        Name: args.Name,
        Email: args.Email
    })
}

function createPost(root: any, args: any, context: any) {
    return context.prisma.createPost({
        Attachments: args.Attachments,
        CommentCount: args.CommentCount,
        LikeCount: args.LikeCount,
        Score: args.Score,
        ShareCount: args.ShareCount,
        Text: args.Text,
        UserId: args.UserId
    })
}

function updatePost(root: any, args: any, context: any) {
    return context.prisma.updatePost({
        data: args.data,
        where: {
            id: args.id
        }
    })
}

export const Mutation = {
    createUser,
    createPost,
    updatePost
}