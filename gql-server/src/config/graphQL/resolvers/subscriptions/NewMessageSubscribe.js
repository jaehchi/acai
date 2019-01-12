const newMessageSubscribe = (parent, args, ctx, info) => {
  return ctx.db.subscription.message({
    where: {
      mutation_in: ['CREATED', 'UPDATED']
    }
  }, info);
};

export const newMessage = {
  subscribe: newMessageSubscribe,
};

