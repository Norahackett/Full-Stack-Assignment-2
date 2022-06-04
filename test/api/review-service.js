import axios from "axios";
import { serviceUrl } from "../fixtures.js";

export const reviewService = {
  reviewServiceUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.reviewServiceUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.reviewServiceUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.reviewServiceUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.reviewServiceUrl}/api/users`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.reviewServiceUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },

  async makeReview(id, review) {
    const response = await axios.post(`${this.reviewServiceUrl}/api/trails/${id}/reviews`, review);
    return response.data;
  },

  async getReviews(id) {
    const response = await axios.get(`${this.reviewServiceUrl}/api/trails/${id}/reviews`);
    return response.data;
  },

  async createTrailreview(newTrail) {
    const response = await axios.post(`${this.reviewServiceUrl}/api/trails`, newTrail);
    return response.data;
  },

  async createTraillist(traillist) {
    const res = await axios.post(`${this.reviewServiceUrl}/api/traillists`, traillist);
    return res.data;
  },

  async deleteAllTraillists() {
    const response = await axios.delete(`${this.reviewServiceUrl}/api/traillists`);
    return response.data;
  },

  async deleteTraillist(id) {
    const response = await axios.delete(`${this.reviewServiceUrl}/api/traillists/${id}`);
    return response;
  },

  async getAllTraillists() {
    const res = await axios.get(`${this.reviewServiceUrl}/api/traillists`);
    return res.data;
  },

  async getTraillist(id) {
    const res = await axios.get(`${this.reviewServiceUrl}/api/traillists/${id}`);
    return res.data;
  },

  async getAllTrails() {
    const res = await axios.get(`${this.reviewServiceUrl}/api/trails`);
    return res.data;
  },

  async createTrail(id, trail) {
    const res = await axios.post(`${this.reviewServiceUrl}/api/traillists/${id}/trails`, trail);
    return res.data;
  },

  async deleteAllTrails() {
    const res = await axios.delete(`${this.reviewServiceUrl}/api/trails`);
    return res.data;
  },

  async getTrail(id) {
    const res = await axios.get(`${this.reviewServiceUrl}/api/trails/${id}`);
    return res.data;
  },

  async deleteTrail(id) {
    const res = await axios.delete(`${this.reviewServiceUrl}/api/trails/${id}`);
    return res.data;
  },
};
