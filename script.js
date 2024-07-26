document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value.toLowerCase();
    const answer = document.getElementById('answer');
    const expertAdviceButton = document.getElementById('expertAdviceButton');
    const experts = document.getElementById('experts');
    const translation = document.getElementById('translation');

    const rightsGuide = {
        "employment": "Indian labor laws provide various rights for employees, including: \n1. Right to fair wages: Under the Minimum Wages Act, 1948.\n2. Right to equal pay for equal work: Ensured by the Equal Remuneration Act, 1976.\n3. Right to protection against sexual harassment: The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.\n4. Right to work in a safe environment: Provided by various health and safety regulations under the Factories Act, 1948.\n5. Right to gratuity: Under the Payment of Gratuity Act, 1972.\n6. Right to social security: Through schemes like Employees' Provident Fund (EPF) and Employees' State Insurance (ESI).",
        "tenant": "Tenant rights in India include: \n1. Right to fair rent: The Rent Control Act in different states ensures fair and reasonable rent. Landlords cannot arbitrarily increase rent beyond state-specified limits.\n2. Right to essential services: Tenants are entitled to essential services like water, electricity, and sanitation. Landlords cannot disconnect these services even in disputes.\n3. Right to live in habitable conditions: Landlords must maintain premises in habitable conditions, ensuring safety and necessary repairs.\n4. Right to a written agreement: Tenants should have a written rental agreement outlining terms and conditions, including rent amount, duration, and responsibilities.\n5. Right to privacy: Landlords cannot enter rented premises without notice, typically 24 hours.\n6. Right to notice before eviction: Tenants cannot be evicted without due process, including valid reasons and a notice period specified in the agreement or state laws.\n7. Right to reclaim security deposit: Tenants are entitled to reclaim their security deposit, minus reasonable deductions for damages or unpaid rent.\n8. Right to challenge unfair eviction: Tenants can challenge unfair eviction notices in court.\n9. Right to sublet: If the rental agreement allows, tenants can sublet the premises.\n10. Right to live in peace and security: Tenants have the right to live peacefully without harassment from the landlord.\n\nKey laws governing tenant rights:\n1. The Rent Control Act: Different states have their versions, such as the Maharashtra Rent Control Act, 1999 and the Delhi Rent Control Act, 1958.\n2. The Transfer of Property Act, 1882: Governs the relationship between landlord and tenant and provides general principles regarding leases and rental agreements.\n3. The Model Tenancy Act, 2021: A uniform framework for tenancy regulation across the country, which states can adopt to reform and streamline rental housing.",
        "consumer": "Consumer rights in India include: \n1. Right to be informed: About the quality, quantity, potency, purity, standard, and price of goods or services.\n2. Right to choose: Access to a variety of goods and services at competitive prices.\n3. Right to safety: Protection against marketing of goods and services hazardous to life and property.\n4. Right to be heard: Consumers' interests will receive due consideration at appropriate forums.\n5. Right to seek redressal: Against unfair or restrictive trade practices.\n6. Right to consumer education: Information and skills needed for informed choices and protection from exploitation.",
        "women": "Women's rights in India include: \n1. Right to equal treatment: Ensured by the Constitution of India.\n2. Right to protection against domestic violence: Provided by the Protection of Women from Domestic Violence Act, 2005.\n3. Right to maternity benefits: Under the Maternity Benefit Act, 1961.\n4. Right to equal pay for equal work: Ensured by the Equal Remuneration Act, 1976.\n5. Right to protection against sexual harassment: The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
        "accident": "Rights of accident victims in India include: \n1. Right to compensation: Under the Motor Vehicles Act, 1988.\n2. Right to medical treatment: Immediate medical attention without upfront payment.\n3. Right to report: File an FIR (First Information Report) at the nearest police station.\n4. Right to legal aid: Access to legal assistance to file compensation claims.",
        "insurance": "Insurance rights in India include: \n1. Right to complete information: About policy terms and conditions.\n2. Right to timely claim settlement: Insurers are obligated to settle claims within a stipulated time.\n3. Right to grievance redressal: Policyholders can approach insurance ombudsman for grievances.",
    };

    const rightsGuideTranslated = {
        "employment": {
            "mr": "भारतीय कामगार कायदे कर्मचार्‍यांना विविध हक्क प्रदान करतात, ज्यात: \n1. न्याय्य वेतनाचा हक्क: किमान वेतन अधिनियम, 1948 अंतर्गत.\n2. समान कार्यासाठी समान वेतनाचा हक्क: समान वेतन अधिनियम, 1976 द्वारे सुनिश्चित.\n3. लैंगिक छळापासून संरक्षणाचा हक्क: कार्यस्थळी महिलांच्या लैंगिक छळापासून संरक्षण अधिनियम, 2013.\n4. सुरक्षित वातावरणात काम करण्याचा हक्क: फॅक्टरीज कायदा, 1948 अंतर्गत विविध आरोग्य आणि सुरक्षा नियमांद्वारे प्रदान.\n5. ग्रॅट्युटीचा हक्क: ग्रॅट्युटीच्या पेमेंट्स अधिनियम, 1972 अंतर्गत.\n6. सामाजिक सुरक्षा हक्क: कर्मचारी भविष्य निधी (EPF) आणि कर्मचारी राज्य विमा (ESI) यांसारख्या योजनांद्वारे.",
            "hi": "भारतीय श्रम कानून कर्मचारियों को विभिन्न अधिकार प्रदान करते हैं, जिनमें शामिल हैं: \n1. उचित वेतन का अधिकार: न्यूनतम वेतन अधिनियम, 1948 के तहत.\n2. समान काम के लिए समान वेतन का अधिकार: समान पारिश्रमिक अधिनियम, 1976 द्वारा सुनिश्चित.\n3. यौन उत्पीड़न से संरक्षण का अधिकार: कार्यस्थल पर महिलाओं के यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम, 2013.\n4. सुरक्षित वातावरण में काम करने का अधिकार: फैक्टरीज अधिनियम, 1948 के तहत विभिन्न स्वास्थ्य और सुरक्षा नियमों द्वारा प्रदान.\n5. ग्रेच्युटी का अधिकार: ग्रेच्युटी भुगतान अधिनियम, 1972 के तहत.\n6. सामाजिक सुरक्षा का अधिकार: कर्मचारी भविष्य निधि (EPF) और कर्मचारी राज्य बीमा (ESI) जैसी योजनाओं के माध्यम से."
        },
        "tenant": {
            "mr": "भारतातील भाडेकरूंचे हक्क समाविष्ट आहेत: \n1. न्याय्य भाड्याचा हक्क: विविध राज्यांतील भाडे नियंत्रण कायदा न्याय्य आणि वाजवी भाडे सुनिश्चित करतो. घरमालक राज्याने निर्दिष्ट केलेल्या मर्यादेपलीकडे मनमानीने भाडेवाढ करू शकत नाहीत.\n2. अत्यावश्यक सेवांचा हक्क: भाडेकरूंना पाणी, वीज आणि स्वच्छता यांसारख्या अत्यावश्यक सेवांचा हक्क आहे. वादांमध्येही घरमालक या सेवा डिस्कनेक्ट करू शकत नाहीत.\n3. रहण्यायोग्य परिस्थितीत राहण्याचा हक्क: घरमालकांनी सुरक्षेची खात्री करून आवश्यक दुरुस्ती करून परिसर रहण्यायोग्य परिस्थितीत ठेवणे आवश्यक आहे.\n4. लेखी कराराचा हक्क: भाडेकरूंनी भाडे रक्कम, कालावधी आणि जबाबदाऱ्या यांचा समावेश असलेल्या अटी आणि शर्तींचे वर्णन करणारा लेखी भाडेकरार असणे आवश्यक आहे.\n5. गोपनीयतेचा हक्क: घरमालकांनी साधारणत: 24 तासांच्या नोटिशीशिवाय भाड्याच्या जागेत प्रवेश करू नये.\n6. बेदखल करण्यापूर्वी नोटिशीचा हक्क: करार किंवा राज्य कायद्यांमध्ये निर्दिष्ट केलेल्या वैध कारणे आणि नोटिस कालावधीसह, भाडेकरूंना योग्य प्रक्रियेशिवाय बेदखल केले जाऊ शकत नाही.\n7. सुरक्षा ठेव पुनर्प्राप्त करण्याचा हक्क: भाडेकरूंना त्यांची सुरक्षा ठेव पुनर्प्राप्त करण्याचा हक्क आहे, वाजवी कपात, नुकसानी किंवा न भरलेल्या भाड्याशिवाय.\n8. अन्यायकारक बेदखलीला आव्हान देण्याचा हक्क: भाडेकरू न्यायालयात अन्यायकारक बेदखलीच्या नोटिसला आव्हान देऊ शकतात.\n9. उपभोगाचा हक्क: भाडेकरार परवानगी असल्यास, भाडेकरूंना परिसर उपभोगण्याचा हक्क आहे.\n10. शांती आणि सुरक्षिततेत राहण्याचा हक्क: भाडेकरूंना घरमालकांच्या त्रासाशिवाय शांततेत राहण्याचा हक्क आहे.\n\nभाडेकरूंचे हक्क नियंत्रित करणारे प्रमुख कायदे:\n1. भाडे नियंत्रण कायदा: विविध राज्यांमध्ये त्यांचे आवृत्ती आहेत, जसे की महाराष्ट्र भाडे नियंत्रण कायदा, 1999 आणि दिल्ली भाडे नियंत्रण कायदा, 1958.\n2. संपत्ती हस्तांतरण कायदा, 1882: घरमालक आणि भाडेकरू यांच्यातील संबंध नियंत्रित करतो आणि भाडे आणि भाडेकरारांबाबत सामान्य तत्त्वे प्रदान करतो.\n3. मॉडेल भाडे कायदा, 2021: देशभरातील भाडे नियंत्रणासाठी एकसमान चौकट, ज्याला राज्ये सुधारण्यासाठी आणि भाडे गृहनिर्माण सुलभ करण्यासाठी स्वीकारू शकतात.",
            "hi": "भारत में किरायेदारों के अधिकारों में शामिल हैं: \n1. उचित किराए का अधिकार: विभिन्न राज्यों में किराया नियंत्रण अधिनियम न्यायसंगत और उचित किराया सुनिश्चित करता है। मकान मालिक राज्य द्वारा निर्दिष्ट सीमाओं से परे किराए में मनमानी वृद्धि नहीं कर सकते।\n2. आवश्यक सेवाओं का अधिकार: किरायेदारों को पानी, बिजली और स्वच्छता जैसी आवश्यक सेवाओं का अधिकार है। मकान मालिक विवादों में भी इन सेवाओं को डिस्कनेक्ट नहीं कर सकते।\n3. रहने योग्य परिस्थितियों में रहने का अधिकार: मकान मालिकों को आवश्यक मरम्मत करके परिसर को रहने योग्य परिस्थितियों में रखना चाहिए, जिससे सुरक्षा सुनिश्चित हो सके।\n4. लिखित समझौते का अधिकार: किरायेदारों के पास एक लिखित किराए का समझौता होना चाहिए जिसमें शर्तें और शर्तें, किराए की राशि, अवधि और जिम्मेदारियाँ शामिल हों।\n5. गोपनीयता का अधिकार: मकान मालिक बिना नोटिस के किराए की परिसरों में प्रवेश नहीं कर सकते, आमतौर पर 24 घंटे।\n6. बेदखली से पहले नोटिस का अधिकार: किरायेदारों को उचित प्रक्रिया के बिना बेदखल नहीं किया जा सकता, जिसमें वैध कारण और समझौते या राज्य कानूनों में निर्दिष्ट नोटिस अवधि शामिल है।\n7. सुरक्षा जमा की पुनर्प्राप्ति का अधिकार: किरायेदारों को उनके सुरक्षा जमा को पुनर्प्राप्त करने का अधिकार है, कम से कम उचित कटौती के लिए क्षति या अवैतनिक किराए के लिए।\n8. अनुचित बेदखली को चुनौती देने का अधिकार: किरायेदार अनुचित बेदखली नोटिस को अदालत में चुनौती दे सकते हैं।\n9. उप-लीज का अधिकार: अगर किराए के समझौते की अनुमति है, तो किरायेदार परिसरों को उप-लीज कर सकते हैं।\n10. शांति और सुरक्षा में रहने का अधिकार: किरायेदारों को मकान मालिक के उत्पीड़न के बिना शांति से रहने का अधिकार है।\n\nकिरायेदारों के अधिकारों को नियंत्रित करने वाले प्रमुख कानून:\n1. किराया नियंत्रण अधिनियम: विभिन्न राज्यों की अपनी संस्करण हैं, जैसे महाराष्ट्र किराया नियंत्रण अधिनियम, 1999 और दिल्ली किराया नियंत्रण अधिनियम, 1958।\n2. संपत्ति हस्तांतरण अधिनियम, 1882: मकान मालिक और किरायेदार के बीच संबंध को नियंत्रित करता है और लीज और किराया समझौतों के बारे में सामान्य सिद्धांत प्रदान करता है।\n3. मॉडल किराया अधिनियम, 2021: देश भर में किराए के नियमन के लिए एक समान ढांचा, जिसे राज्य सुधारने और किराए के आवास को सुव्यवस्थित करने के लिए अपना सकते हैं।"
        },
        "consumer": {
            "mr": "भारतात ग्राहक हक्कांमध्ये समाविष्ट आहेत: \n1. माहितीचा हक्क: वस्तू किंवा सेवांची गुणवत्ता, प्रमाण, सामर्थ्य, शुद्धता, मानक आणि किंमत याबद्दल.\n2. निवडीचा हक्क: स्पर्धात्मक किमतीत विविध वस्तू आणि सेवांमध्ये प्रवेश.\n3. सुरक्षिततेचा हक्क: जीवन आणि मालमत्तेस धोकादायक वस्तू आणि सेवांच्या विक्रीविरूद्ध संरक्षण.\n4. ऐकले जाण्याचा हक्क: ग्राहकांच्या हितांचा योग्य मंचांवर विचार केला जाईल.\n5. निवारण साधण्याचा हक्क: अनुचित किंवा प्रतिबंधात्मक व्यापार पद्धतींविरुद्ध.\n6. ग्राहक शिक्षणाचा हक्क: माहिती आणि कौशल्ये जे सूचित निवडीसाठी आणि शोषणापासून संरक्षण करण्यासाठी आवश्यक आहेत.",
            "hi": "भारत में उपभोक्ता अधिकारों में शामिल हैं: \n1. सूचित होने का अधिकार: वस्तुओं या सेवाओं की गुणवत्ता, मात्रा, शक्ति, शुद्धता, मानक और मूल्य के बारे में।\n2. चयन का अधिकार: प्रतिस्पर्धी कीमतों पर विभिन्न वस्तुओं और सेवाओं की पहुंच।\n3. सुरक्षा का अधिकार: जीवन और संपत्ति के लिए हानिकारक वस्तुओं और सेवाओं के विपणन के खिलाफ सुरक्षा।\n4. सुने जाने का अधिकार: उपभोक्ता के हितों पर उचित मंचों पर विचार किया जाएगा।\n5. निवारण की मांग करने का अधिकार: अनुचित या प्रतिबंधात्मक व्यापार प्रथाओं के खिलाफ।\n6. उपभोक्ता शिक्षा का अधिकार: सूचित विकल्पों और शोषण से सुरक्षा के लिए आवश्यक जानकारी और कौशल।"
        },
        "women": {
            "mr": "भारतातील महिलांचे हक्क समाविष्ट आहेत: \n1. समान वागणुकीचा हक्क: भारतीय संविधानाद्वारे सुनिश्चित.\n2. घरगुती हिंसाचारापासून संरक्षणाचा हक्क: महिलांचा घरगुती हिंसाचारापासून संरक्षण अधिनियम, 2005 अंतर्गत.\n3. मातृत्व लाभांचा हक्क: मातृत्व लाभ अधिनियम, 1961 अंतर्गत.\n4. समान कामासाठी समान वेतनाचा हक्क: समान पारिश्रमिक अधिनियम, 1976 द्वारे सुनिश्चित.\n5. लैंगिक छळापासून संरक्षणाचा हक्क: कार्यस्थळी महिलांच्या लैंगिक छळापासून संरक्षण अधिनियम, 2013.",
            "hi": "भारत में महिलाओं के अधिकारों में शामिल हैं: \n1. समान व्यवहार का अधिकार: भारतीय संविधान द्वारा सुनिश्चित।\n2. घरेलू हिंसा से संरक्षण का अधिकार: घरेलू हिंसा से महिलाओं के संरक्षण अधिनियम, 2005 के तहत।\n3. मातृत्व लाभ का अधिकार: मातृत्व लाभ अधिनियम, 1961 के तहत।\n4. समान काम के लिए समान वेतन का अधिकार: समान पारिश्रमिक अधिनियम, 1976 द्वारा सुनिश्चित।\n5. यौन उत्पीड़न से संरक्षण का अधिकार: कार्यस्थल पर महिलाओं के यौन उत्पीड़न (रोकथाम, निषेध और निवारण) अधिनियम, 2013।"
        },
        "accident": {
            "mr": "भारतात अपघातग्रस्तांचे हक्क समाविष्ट आहेत: \n1. नुकसानभरपाईचा हक्क: मोटार वाहन कायदा, 1988 अंतर्गत.\n2. वैद्यकीय उपचाराचा हक्क: आगाऊ पेमेंटशिवाय तातडीने वैद्यकीय उपचार.\n3. अहवाल दाखल करण्याचा हक्क: जवळच्या पोलीस स्टेशनमध्ये FIR दाखल करा.\n4. कायदेशीर मदतीचा हक्क: नुकसानभरपाईच्या दाव्यांसाठी कायदेशीर सहाय्य मिळण्याचा हक्क.",
            "hi": "भारत में दुर्घटना पीड़ितों के अधिकारों में शामिल हैं: \n1. मुआवजे का अधिकार: मोटर वाहन अधिनियम, 1988 के तहत।\n2. चिकित्सा उपचार का अधिकार: अग्रिम भुगतान के बिना तत्काल चिकित्सा देखभाल।\n3. रिपोर्ट दर्ज करने का अधिकार: निकटतम पुलिस स्टेशन में FIR दर्ज करें।\n4. कानूनी सहायता का अधिकार: मुआवजा दावों को दायर करने के लिए कानूनी सहायता तक पहुंच।"
        },
        "insurance": {
            "mr": "भारतात विमाधारकांचे हक्क समाविष्ट आहेत: \n1. संपूर्ण माहितीचा हक्क: धोरणाच्या अटी आणि शर्तींबद्दल.\n2. वेळेवर दावा सेटलमेंटचा हक्क: विमा कंपन्या निर्दिष्ट केलेल्या वेळेत दावे सेटल करण्यास बांधील आहेत.\n3. तक्रार निवारणाचा हक्क: विमाधारक तक्रारींसाठी विमा ओंबड्समनकडे जाऊ शकतात.",
            "hi": "भारत में बीमा धारकों के अधिकारों में शामिल हैं: \n1. पूरी जानकारी का अधिकार: पॉलिसी की शर्तों और स्थितियों के बारे में।\n2. समय पर दावा निपटान का अधिकार: बीमा कंपनियों को निर्धारित समय के भीतर दावे निपटाने के लिए बाध्य हैं।\n3. शिकायत निवारण का अधिकार: पॉलिसीधारक बीमा लोकपाल के पास शिकायतों के लिए जा सकते हैं।"
        }
    };

    let response = "Sorry, I don't have information on that topic.";
    let category = null;

    for (const key in rightsGuide) {
        if (question.includes(key)) {
            response = rightsGuide[key];
            category = key;
            break;
        }
    }

    answer.textContent = response;
    expertAdviceButton.style.display = 'block';
    experts.style.display = 'none';
    translation.textContent = "";

    expertAdviceButton.addEventListener('click', function() {
        experts.style.display = 'block';
        document.getElementById('expertList').textContent = "Adv.Harish Salve. \n Adv Ram Jethmalani";
    });

    document.getElementById('languageSelect').addEventListener('change', function() {
        translateText(category);
    });

    function translateText(category) {
        const targetLanguage = document.getElementById('languageSelect').value;
        
        if (category && rightsGuideTranslated[category] && rightsGuideTranslated[category][targetLanguage]) {
            document.getElementById('translation').textContent = rightsGuideTranslated[category][targetLanguage];
        } else {
            document.getElementById('translation').textContent = "Translation not available.";
        }
    }
});