import ConvertApi from 'convertapi-js'
let convertApi = ConvertApi.auth('jPaCOk8hKMLSwN5H')
let params = convertApi.createParams()
params.add('File', elFileInput.files[0]);
let result = await convertApi.convert('pdf', 'txt', params)

console.log(result);
console.log(url);



var passage = `Fort of Kanod was built by Maratha ruler Tatya Tope in 1755 CE. In 1860, it came under the Patiala State during the British raj. ruler of Patiala, Narendra Singh, changed the name of Kanod Fort to Mahandragarh after his son Mahendra. Because of the name of the fort, this town came to be known as Mahendragarh and the name of Narnaul Nizam was changed to Mahendragarh Nizam.[5]
It is said that Malik Mahadud Khan, a servant of [Babar]] had settled a habitation here. In 1948, with the formation of PEPSU, Mahendragarh territory from Patiala State, Dadri territory (Now Charkhi Dadri) from Jind and Bawal territory from Nabha State were constituted into Mahendragarh district with the headquarters at Narnaul. At that time, there were three tehsils, namely; Narnaul, Charkhi Dadri and Bawal and Mahendragarh was a sub-tehsil. In 1949, Mahendragarh sub-tehsil was made a tehsil. In 1950, Bawal tehsil was broken up and 78 villages were transferred to Gurgaon district forming Bawal as a sub-tehsil and remaining villages were added to Narnaul and Mahendragarh. In 1956 the Rewari tehsil (except 61 villages ) was excluded from Gurgaon district and included in Mahendragarh district. The Charkhi-Dadri sub-division was excluded from Mahendragarh district and included in the newly constituted district of Bhiwani. In 1977, 81 villages of Rewari tehsil was constituted into Bawal tehsil. In 1978 the district comprised 4 tehsils (Mahendragarh, Rewari, Narnaul and Bawal). On 1 November 1989, Rewari and Bawal tehsils (taken from Mahendragarh district) and Kosli tehsil except 10 villages (taken from Rohtak district) were constituted into a new district of Rewari. Presently Mahendragarh district has 3 sub-divisions (Kanina, Narnaul and Mahendergarh), 5 tehsils (Kanina, Mahendragarh, Nangal Chaudhary, Ateli, Narnaul) and 1 sub-tehsil (Satnali).`;

var question = 'Who built fort of kanod?'; // Cats!

qna.load().then(model => {

    
    model.findAnswers(question, passage).then(answers => {
      console.log('Answers: ', answers[0].text);
    });
  });




//******************** drag ****************** */

let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  })
  
  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  