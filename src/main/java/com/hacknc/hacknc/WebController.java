package com.hacknc.hacknc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/form")
    public String homePage() {
        return "form";
    }

    @GetMapping("/job-card")
    public String jobCardPage() {
        return "job-card";
    }
}
