import axios from "axios";

const serverURL = `http://localhost:8080`;

const isJSON = (str) => {
  try {
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
};

export const getDataJSON = async (path, setData = "") => {
  await axios
    .get(`${serverURL}/${path}`)
    .then((res) => {
      if (isJSON(res.data)) {
        return JSON.parse(res.data);
      }

      return res.data;
    })
    .then((res) => {
      return setData(res);
    });
};

export const setDataJSON = async (path, newData) => {
  await axios
    .post(`${serverURL}/${path}`, newData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
