import axios from "../api/axios";

export async function getData(uri) {
  try {
    const response = await axios.get(uri);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function postData(uri, data) {
  try {
    return await axios.post(uri, data);
  } catch (error) {
    console.log("error", error);
    return { msg: error?.response?.message, status: 404 };
  }
}

export async function deleteData(uri) {
  try {
    const response = await axios.delete(uri);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function putData(uri, data) {
  try {
    const response = await axios.put(uri, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchData(getData, setState) {
  try {
    const response = await getData();
    if (response.data) setState(response.data);
  } catch (error) {
    console.log("error ", error);
  }
}

export async function fetchDataWithArgs(getData, setState, args) {
  try {
    const response = await getData(args);
    setState(response.data);
  } catch (error) {
    console.log(error);
  }
}
