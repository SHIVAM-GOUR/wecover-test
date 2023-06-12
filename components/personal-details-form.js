import { Fragment } from "react";
import EmirateIdFrontContainer from "./emirate-id-front-container";
import styles from "./personal-details-form.module.css";
import Image from "next/image";
const PersonalDetailsForm = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <p className={styles.formTitle}>
          Excellent choice! Please provide your Personal details.
        </p>
      </div>
      <div className={styles.widget}>
        <div className={styles.titleParent}>
          <div className={styles.title} id="subheading">
            <div className={styles.title1}>
              Excellent choice! Please provide your Personal details.
            </div>
            <div className={styles.steps}>
              <div className={styles.stepper}>
                <div className={styles.stepperelementshorizontal}>
                  <div className={styles.div}>
                    <div className={styles.line} />
                    <img
                      className={styles.iconContainer}
                      alt=""
                      src="/icon-container.svg"
                    />
                    <div className={styles.line1} />
                  </div>
                  <div className={styles.text}>Step 1</div>
                </div>
                <div className={styles.stepperelementshorizontal1}>
                  <div className={styles.div1}>
                    <div className={styles.line1} />
                    <img
                      className={styles.iconContainer}
                      alt=""
                      src="/icon-container1.svg"
                    />
                    <div className={styles.line1} />
                  </div>
                  <div className={styles.text}>Step 2</div>
                </div>
                <div className={styles.stepperelementshorizontal1}>
                  <div className={styles.div1}>
                    <div className={styles.line1} />
                    <img
                      className={styles.iconContainer}
                      alt=""
                      src="/icon-container2.svg"
                    />
                    <div className={styles.line1} />
                  </div>
                  <div className={styles.text}>Step 3</div>
                </div>
                <div className={styles.stepperelementshorizontal3}>
                  <div className={styles.div1}>
                    <div className={styles.line6} />
                    <div className={styles.iconContainer3}>
                      <div className={styles.div4}>4</div>
                    </div>
                    <div className={styles.line6} />
                  </div>
                  <div className={styles.text3}>Step 4</div>
                </div>
                <div className={styles.stepperelementshorizontal3}>
                  <div className={styles.div5}>
                    <div className={styles.line6} />
                    <div className={styles.iconContainer3}>
                      <div className={styles.div4}>5</div>
                    </div>
                    <div className={styles.line} />
                  </div>
                  <div className={styles.text3}>Step 5</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.plans}>
              <div className={styles.uploadYourEmirate}>
                Upload your Emirate ID front and back images
              </div>
              <div className={styles.idFrontParent}>
                <EmirateIdFrontContainer
                  idFront="/idfrontricon.svg"
                  idBack="ID  Front"
                  propBackgroundColor="rgba(0, 167, 255, 0.1)"
                  propWidth="66.62px"
                  propHeight="52.05px"
                />
                <EmirateIdFrontContainer
                  idFront="/idfrontricon1.svg"
                  idBack="ID BACK"
                  propBackgroundColor="#fbfbfb"
                  propWidth="52px"
                  propHeight="42px"
                />
              </div>
            </div>
            <div className={styles.personalDetailsParent}>
              <div className={styles.personalDetails}>Personal Details</div>
              <div className={styles.nameeId}>
                <div className={styles.fullName}>
                  <div className={styles.input}>
                    <div className={styles.container}>
                      <div className={styles.labelFocus}>Full Name</div>
                      <div className={styles.content}>
                        <div className={styles.startAdornment}>
                          <div className={styles.space} />
                          <div className={styles.shape}>$</div>
                          <div className={styles.space1} />
                        </div>
                        <div className={styles.value}>Amin Abbar</div>
                      </div>
                    </div>
                    <div className={styles.endAdornment}>
                      <div className={styles.iconbutton}>
                        <img
                          className={styles.iconsicEye}
                          alt=""
                          src="/iconsic-eye.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.spaceM} />
                  </div>
                  <div className={styles.helptext}>
                    <img
                      className={styles.iconsicInfo}
                      alt=""
                      src="/iconsic-info.svg"
                    />
                    <div className={styles.helperText}>
                      Caption text, description, notification
                    </div>
                  </div>
                  <img
                    className={styles.selectArrowIcon}
                    alt=""
                    src="/select-arrow.svg"
                  />
                  <div className={styles.scroll}>
                    <div className={styles.scroll1} />
                  </div>
                </div>
                <div className={styles.fullName}>
                  <div className={styles.input}>
                    <div className={styles.container}>
                      <div className={styles.labelFocus}>E-ID Number</div>
                      <div className={styles.content}>
                        <div className={styles.startAdornment}>
                          <div className={styles.space} />
                          <div className={styles.shape}>$</div>
                          <div className={styles.space1} />
                        </div>
                        <div className={styles.value}>786-2345590-232</div>
                      </div>
                    </div>
                    <div className={styles.endAdornment}>
                      <div className={styles.iconbutton}>
                        <img
                          className={styles.iconsicEye}
                          alt=""
                          src="/iconsic-eye.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.spaceM} />
                  </div>
                  <div className={styles.helptext}>
                    <img
                      className={styles.iconsicInfo}
                      alt=""
                      src="/iconsic-info.svg"
                    />
                    <div className={styles.helperText}>
                      Caption text, description, notification
                    </div>
                  </div>
                  <img
                    className={styles.selectArrowIcon}
                    alt=""
                    src="/select-arrow.svg"
                  />
                  <div className={styles.scroll}>
                    <div className={styles.scroll1} />
                  </div>
                </div>
                <div className={styles.dateOfBirth}>
                  <div className={styles.container2}>
                    <div className={styles.labelFocus}>Date of Birth</div>
                    <div className={styles.content}>
                      <div className={styles.startAdornment}>
                        <div className={styles.space} />
                        <div className={styles.shape}>$</div>
                        <div className={styles.space1} />
                      </div>
                      <div className={styles.value2}>21/04/89</div>
                    </div>
                  </div>
                  <div className={styles.iconbutton2}>
                    <img
                      className={styles.iconsicEye}
                      alt=""
                      src="/icon-linecalendar.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.nameeId}>
                <div className={styles.fullName}>
                  <div className={styles.input}>
                    <div className={styles.container}>
                      <div className={styles.labelFocus}>Nationality</div>
                      <div className={styles.content}>
                        <div className={styles.startAdornment}>
                          <div className={styles.space} />
                          <div className={styles.shape}>$</div>
                          <div className={styles.space1} />
                        </div>
                        <div className={styles.value}>UAE</div>
                      </div>
                    </div>
                    <div className={styles.endAdornment}>
                      <div className={styles.iconbutton}>
                        <img
                          className={styles.iconsicEye}
                          alt=""
                          src="/iconsic-eye.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.spaceM} />
                  </div>
                  <div className={styles.helptext}>
                    <img
                      className={styles.iconsicInfo}
                      alt=""
                      src="/iconsic-info.svg"
                    />
                    <div className={styles.helperText}>
                      Caption text, description, notification
                    </div>
                  </div>
                  <img
                    className={styles.selectArrowIcon2}
                    alt=""
                    src="/select-arrow.svg"
                  />
                  <div className={styles.scroll}>
                    <div className={styles.scroll1} />
                  </div>
                </div>
                <div className={styles.fullName}>
                  <div className={styles.input}>
                    <div className={styles.container}>
                      <div className={styles.labelFocus}>Phone Number</div>
                      <div className={styles.content}>
                        <div className={styles.startAdornment}>
                          <div className={styles.space} />
                          <div className={styles.shape}>$</div>
                          <div className={styles.space1} />
                        </div>
                        <div className={styles.value}>+971 123 4567</div>
                      </div>
                    </div>
                    <div className={styles.endAdornment}>
                      <div className={styles.iconbutton}>
                        <img
                          className={styles.iconsicEye}
                          alt=""
                          src="/iconsic-eye.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.spaceM} />
                  </div>
                  <div className={styles.helptext}>
                    <img
                      className={styles.iconsicInfo}
                      alt=""
                      src="/iconsic-info.svg"
                    />
                    <div className={styles.helperText}>
                      Caption text, description, notification
                    </div>
                  </div>
                  <img
                    className={styles.selectArrowIcon}
                    alt=""
                    src="/select-arrow.svg"
                  />
                  <div className={styles.scroll}>
                    <div className={styles.scroll1} />
                  </div>
                </div>
                <div className={styles.fullName}>
                  <div className={styles.input}>
                    <div className={styles.container}>
                      <div className={styles.labelFocus}>Email</div>
                      <div className={styles.content}>
                        <div className={styles.startAdornment}>
                          <div className={styles.space} />
                          <div className={styles.shape}>$</div>
                          <div className={styles.space1} />
                        </div>
                        <div className={styles.value}>amin.abbar@gmail.com</div>
                      </div>
                    </div>
                    <div className={styles.endAdornment}>
                      <div className={styles.iconbutton}>
                        <img
                          className={styles.iconsicEye}
                          alt=""
                          src="/iconsic-eye.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.spaceM} />
                  </div>
                  <div className={styles.helptext}>
                    <img
                      className={styles.iconsicInfo}
                      alt=""
                      src="/iconsic-info.svg"
                    />
                    <div className={styles.helperText}>
                      Caption text, description, notification
                    </div>
                  </div>
                  <img
                    className={styles.selectArrowIcon}
                    alt=""
                    src="/select-arrow.svg"
                  />
                  <div className={styles.scroll}>
                    <div className={styles.scroll1} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.backnextBtns}>
              <div className={styles.component2}>
                <div className={styles.next}>Next</div>
                <Image src="/icon-linearrow-right.svg" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalDetailsForm;
