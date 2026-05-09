import BASE_URL from '../BASEURL';

const studentsAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/api/students`);
    return await response.json();
  },

  create: async (studentData) => {
    const response = await fetch(`${BASE_URL}/api/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });
    return await response.json();
  },

  update: async (id, studentData) => {
    const response = await fetch(`${BASE_URL}/api/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${BASE_URL}/api/students/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  },
};

export { studentsAPI };