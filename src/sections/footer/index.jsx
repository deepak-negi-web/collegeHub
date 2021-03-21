import React from "react";
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
                    <a href="#">B.Tech</a>
                  </li>
                  <li>
                    <a href="#">MBA</a>
                  </li>
                  <li>
                    <a href="#">MBBS</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Exam</h3>
                <ul>
                  <li>
                    <a href="#">CAT</a>
                  </li>
                  <li>
                    <a href="#">GATE</a>
                  </li>
                  <li>
                    <a href="#">LSAT</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Colleges</h3>
                <ul>
                  <li>
                    <a href="#">IIT</a>
                  </li>
                  <li>
                    <a href="#">AIIMS</a>
                  </li>
                  <li>
                    <a href="#">NLSIU</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <a href="#">
                  <i class="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-twitter"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-snapchat"></i>
                </a>
                <a href="#">
                  <i class="icon ion-social-instagram"></i>
                </a>
                <p class="copyright">CollegeHub © 2020</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FooterWrapper>
  );
}
