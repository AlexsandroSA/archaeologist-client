const erroMessage = (error = {}) => {
  if (error.response) {
    return {
      message: error.response.data.error,
      status: error.response.status
    };
  }

  return { message: '', status: '' };
};

  export default erroMessage;
