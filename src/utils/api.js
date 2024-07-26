import axios from 'axios';

const baseUrl = 'https://forum-api.dicoding.dev/v1';

// USERS

const getAccessToken = () => {
  return localStorage.accessToken;
};

const putAccessToken = (token) => {
  localStorage.accessToken = token;
};

const register = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(baseUrl + '/register', { name, email, password });
    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data; 
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(baseUrl + '/login', { email, password });
    return data.data.token;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};
const getAllUsers = async () => {
  try {
    const { data } = await axios.get(baseUrl + '/users');
    return data.data.users;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const getOwnProfile = async () => {
  try {
    const { data } = await axios.get(baseUrl + '/users/me', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    return data.data.user;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

// THREADS

const createThread = async ({ title, body, category }) => {
  try {
    const { data } = await axios.post(
      baseUrl + '/threads',
      { title, body, category },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const getAllThreads = async () => {
  try {
    const { data } = await axios.get(baseUrl + '/threads');
    return data.data.threads;
  } catch (error) {
    throw error.response.data;
  }
};

const getThreadDetail = async (threadId) => {
  try {
    const { data } = await axios.get(baseUrl + `/threads/${threadId}`);
    return data.data.detailThread;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

// COMMENTS

const createComment = async ({ content, threadId }) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/comments`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

// VOTES

const upVoteThread = async (threadId) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/up-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const downVoteThread = async (threadId) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/down-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const neutralizeVoteThread = async (threadId) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/neutral-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const upVoteComments = async ({ threadId, commentId }) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/comments/${commentId}/up-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const downVoteComments = async ({ threadId, commentId }) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/comments/${commentId}/down-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const neutralizeVoteComments = async ({ threadId, commentId }) => {
  try {
    const { data } = await axios.post(
      baseUrl + `/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

// LEADERBOARDS

const getLeaderboards = async () => {
  try {
    const { data } = await axios.get(baseUrl + '/leaderboards');
    return data.data.leaderboards;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};



export {
  getAccessToken,
  putAccessToken,
  register,
  login,
  getAllUsers,
  getOwnProfile,
  createThread,
  getAllThreads,
  getThreadDetail,
  createComment,
  upVoteThread,
  downVoteThread,
  neutralizeVoteThread,
  upVoteComments,
  downVoteComments,
  neutralizeVoteComments,
  getLeaderboards,
};
