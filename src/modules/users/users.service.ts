export const userService = {
    getProfile: async (id: string) => {
      // Simulated database delay
      if (id !== '1') throw { statusCode: 404, message: 'User not found' };
      return { id, name: 'Rafael Lopes', role: 'Engineer' };
    }
  };
