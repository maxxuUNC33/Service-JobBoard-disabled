package com.hacknc.hacknc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/form")
    public String homePage() {
        return "form";
    }

    @GetMapping("/job_card")
    public String jobCardPage() {
        return "job-card";
    }

    @GetMapping("/home_page")
    public String homepage() {
        return "home_page";
    }

    @GetMapping("/job_list")
    public String jobList() {
        return "job_list";
    }
}
