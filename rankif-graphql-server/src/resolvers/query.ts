function posts(root: any, args: any, context: any) {
    return context.prisma.posts();
}

function users(root: any, args: any, context: any) {
    return context.prisma.users({
        where: {
            Name_contains: args.Filter && args.Filter.SearchKey || ''
        },
        skip: (args.Filter && (args.Filter.PageNumber || 0) * (args.Filter.PageSize || 10)) || 0,
        first:  args.Filter &&  args.Filter.PageSize || 10,
        orderBy: <any>(args.Sort ? (args.Sort.OrderBy + '_' + (args.Sort.Order > 0 ? 'ASC': 'DESC') ): 'createdAt_ASC')
    })
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