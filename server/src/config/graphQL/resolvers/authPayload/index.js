const user = (root, args, ctx, info) => {
  return ctx.db.query.users({ 
    where: { 
      id: root.user.id 
    } 
  }, info);
}

export default { user };