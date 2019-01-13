const newMessageSubscribe = (parent, { id }, ctx, info) => {
  return ctx.db.subscription.message({
    where: {
      mutation_in: ['CREATED', 'UPDATED'],
      node: {
        channel: {
          id,
        }
      }
    }
  }, info);
};

export const newMessage = {
  subscribe: newMessageSubscribe,
};

