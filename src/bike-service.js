export default class BikeService {
  static getBike(zipCode) {
    return fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${zipCode}&distance=10&stolenness=stolen`)
      .then(function(response){
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}

