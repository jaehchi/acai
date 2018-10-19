export const user  = (root, args, ctx, info) => {
  return context.db.query.users({ 
    where: { 
      id: root.user.id 
    } 
  }, info);
}
