function posts(root: any, args: any, context: any) {
    return context.prisma.posts();
}

function users(root: any, args: any, context: any) {
    return context.prisma.users();
}

function post(root: any, args: any, context: any) {
    return context.prisma.post({id: args.id});

}

function user(root: any, args: any, context: any) {
    return context.prisma.user({id: args.id});

}

export const Query = {
    posts,
    post,
    users,
    user
}