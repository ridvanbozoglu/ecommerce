import axios from '../../axios/eccomerceApi';

export const fetchRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('roles');
      return response.data; 
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};
