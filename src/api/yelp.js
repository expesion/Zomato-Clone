import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MTxbttcvOq-R7A302-2YLap0AXMTWiVV173OWL9ywCI_dM1-B_pn_Ql6GszFr8TEb2JULE41xB-VhgpfmtZH-AMG9sCervtCiuiy5TW-uLU20CCM1PN8jIgvg_CQYHYx",
  },
});
