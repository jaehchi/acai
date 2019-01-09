const newMessageSubscribe = (parent, args, ctx, info) => {
  return ctx.db.subscription.message({
    where: {
      mutation_in: ['CREATED']
    }
  }, info);
};

const newMessage = {
  subscribe: newMessageSubscribe,
}

export default newMessage;

