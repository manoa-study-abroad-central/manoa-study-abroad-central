import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

const MIX = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col className="d-flex flex-column justify-content-center">
        <h1 style={{ paddingBottom: '50px' }}>Manoa International Exchange</h1>
      </Col>
    </Row>
    <Row>
      <Col style={{ paddingLeft: '30px' }}>
        <p>The Mānoa International Exchange (MIX) office administers international student exchange programs for the University of Hawai’i at Mānoa (UHM).</p>
        <p>MIX is a program that demonstrates the University’s commitment to student mobility, international exchange, and global engagement
          by providing compelling opportunities for UHM undergraduate and graduate students to study on exchange at one of many partner
          universities overseas. In reciprocity, MIX also welcomes exchange students from these overseas partner universities to study at UHM.
          Exchange study may be for one or two semesters.
        </p>
        <p style={{ paddingBottom: '100px' }}>
          MIX enables UHM students to go abroad and experience other cultures in safe and supportive environments, and enables international
          students to immerse themselves in the cultural and academic community of the UHM campus and of Hawai’i. UH Mānoa offers a place where
          students can truly “mix” in every sense of the word. Students going to other countries or coming to Hawai’i are vital to the diversity
          Mānoa offers. Our campus and global community are strengthened by the experiences, ideas, friendships, and networks formed by
          exchange students.
        </p>
      </Col>
      <Col>
        <Image style={{ width: '700px', height: '400px' }} src="https://abroadin.com/blog/wp-content/uploads/2023/01/selective-focus-miniature-tourist-compass-map-with-plastic-toy-airplane-abstract-background-travel-concept-1.jpg" />
      </Col>
    </Row>
    <Row style={{ paddingLeft: '20px' }}>
      <h2>Minimum Qualifications</h2>
      <h4>Undergraduate Applicants</h4>
      <p>- Must be a full-time UH Manoa student</p>
      <p>- Must complete at least two semesters at UH Manoa prior to departure with at least 24 credits completed </p>
      <p>- Must maintain a cumulative GPA of 2.5 or higher, 3.0 preferred. GPA must also be 2.5 or higher in the term prior to going abroad</p>
      <p>- One letter of recommendation (see next section)</p>
      <br />
      <p>
        <p style={{ fontWeight: 'bold' }}>NOTE</p>
        Please check the MIX program pages of the partner universities you are interested in studying at as each partner university may have
        additional eligibility requirements. For instance, they may only accept students with a cumulative GPA of 3.0 or higher or require students to
        complete two semesters at UH Manoa prior to applying to their exchange program (which differs from MIX&apos;s minimum qualification of completing two semesters
        prior to departure). There may also be minimum language requirements that must be met.
      </p>
      <p>
        <p style={{ fontWeight: 'bold' }}>TRANSFER STUDENTS</p>
        MIX cannot count semesters completed outside of UH Manoa towards the eligibility requirement, although exceptions may be considered on a case-by-case basis.
      </p>
      <h4>Postgraduate Applicants</h4>
      <p>- Cumulative GPA of 3.0 or higher; GPA must also be 3.0 or higher in the term(s) prior to the term(s) abroad. If you have yet to establish a GPA at UHM,
        you can still apply for MIX but will need to have completed at least one term with a GPA of 3.0 or higher prior to participation in the MIX program.
      </p>
      <p>- One letter of recommendation (see next section)</p>
      <h2>Additional Conditions</h2>
      <h4>Academic Standing</h4>
      <p>
        Students must be in good academic and disciplinary standing to apply to and participate in a MIX program. Students may not be on disciplinary probation,
        suspension, or deferred suspension at the time of application, prior to or during their time abroad. An applicant’s total educational and disciplinary record,
        educational objective, professional attitude, level of preparedness and interpersonal maturity, advisor recommendations, personal preparation and personal
        achievements may be considered in the selection process.
      </p>
      <p>MIX also reserves the right to interview students during the application process and deny acceptance to any applicant for any reason MIX determines to
        be material to the applicant’s qualifications. Additionally, MIX, UHM, and the Host Institution reserves the right to enforce appropriate standards of conduct
        and may at any time revoke acceptance for failure to maintain these standards or for any actions or conduct that is considered to be incompatible with the
        interest, harmony, comfort and welfare of the program and other students. If a student’s participation is terminated in this manner, any program-related fees
        and expenses will not be refundable.
      </p>
    </Row>
    <hr />
    <Row style={{ paddingLeft: '20px', paddingBottom: '50px' }}>
      <h2>Letter of Recommendation Details</h2>
      <p>Applicants are required to obtain one academic recommendation. This recommendation should come from someone whose class you have taken at UH Mānoa, such as
        a professor, lecturer, graduate assistant, etc. In other words, someone who can speak to your academic abilities. Professional and familial recommendations are
        not accepted. The MIX Letter of Recommendation Form and instructions can be downloaded from MIX&apos;s <a href="http://manoa.hawaii.edu/mix/outbound/forms/">Forms</a> page.
      </p>
      <p>If you are a transfer student or have yet to take a course at UHM, you may ask a non-UHM professor, lecturer, or graduate assistant to submit a formal letter
        of recommendation on your behalf. This letter should be typed on official letterhead, signed, and sent directly to MIX by the recommender. MIX will accept
        letters of recommendation that are mailed or emailed by the recommender directly to <a href="outbound@hawaii.edu">outbound@hawaii.edu</a>. Letters sent via UH FileDrop by the recommender will
        also be accepted.
      </p>
    </Row>
    <h6 style={{ paddingLeft: '20px' }}>Email <a href="outbound@hawaii.edu">outbound@hawaii.edu</a> with your questions or <a href="http://manoa.hawaii.edu/mix/staff-category/mix-staff/">request an appointment</a></h6>
  </Container>
);

export default MIX;
