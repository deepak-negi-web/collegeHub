import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./styles.js";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-clean">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                <h3>Courses</h3>
                <ul>
                  <li>
                    <Link>B.Tech</Link>
                  </li>
                  <li>
                    <Link>MBA</Link>
                  </li>
                  <li>
                    <Link>MBBS</Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Exam</h3>
                <ul>
                  <li>
                    <Link>CAT</Link>
                  </li>
                  <li>
                    <Link>GATE</Link>
                  </li>
                  <li>
                    <Link>LSAT</Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Colleges</h3>
                <ul>
                  <li>
                    <Link>IIT</Link>
                  </li>
                  <li>
                    <Link>AIIMS</Link>
                  </li>
                  <li>
                    <Link>NLSIU</Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <Link>
                  <i class="icon ion-social-facebook"></i>
                </Link>
                <Link>
                  <i class="icon ion-social-twitter"></i>
                </Link>
                <Link>
                  <i class="icon ion-social-snapchat"></i>
                </Link>
                <Link>
                  <i class="icon ion-social-instagram"></i>
                </Link>
                <p class="copyright">CollegeHub © 2020</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FooterWrapper>
  );
}
