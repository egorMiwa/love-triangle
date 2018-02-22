/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var count = 0;
var arr = [0];
preferences = arr.concat(preferences);

var i;
for (i=1; i<=preferences.length; i++)
{
    var firstEl = preferences[i];
    var secondEl=preferences[firstEl];
    var thirdEl=preferences[secondEl];

    if
    ( (thirdEl == i)
      && (preferences[firstEl] !=firstEl
      && preferences[secondEl] != secondEl
      && preferences[thirdEl] !=thirdEl)
    )
       {
         count++;
       }
}
return count/3;
};
