import React from "react";
import '../../public/assets/css/main.css';

function FreqQuizes() {
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <div className="content px-xl-5">
                            <h3>Frequently Asked <strong>Questions</strong></h3>
                            <p>
                                Facing any difficulties? Check out our FAQ section for the most inquired questions.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">
                            {Array.from({ length: 5 }, (_, index) => (
                                <div className="accordion-item" key={index}>
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq-content-${index + 1}`}>
                                            <span className="num">{index + 1}.</span>
                                            {getQuestionText(index + 1)}
                                        </button>
                                    </h3>
                                    <div id={`faq-content-${index + 1}`} className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            {getAnswerText(index + 1)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper functions to get question and answer text
function getQuestionText(index) {
    // Customize the question text based on the index
    switch (index) {
        case 1:
            return "Non consectetur a erat nam at lectus urna duis?";
        case 2:
            return "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?";
        // Add cases for other questions if needed
        default:
            return "";
    }
}

function getAnswerText(index) {
    // Customize the answer text based on the index
    switch (index) {
        case 1:
            return "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.";
        case 2:
            return "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
        // Add cases for other answers if needed
        default:
            return "";
    }
}

export default FreqQuizes;
