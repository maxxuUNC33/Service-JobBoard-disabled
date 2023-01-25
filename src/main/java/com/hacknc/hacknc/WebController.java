package com.hacknc.hacknc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/form")
    public String homePage() {
        return "form";
    }
    @GetMapping("/job_cards")
    public String jobCards() {
        return "job_cards";
    }
    @GetMapping("/g_auth")
    public String homepage() {
        return "g_auth";
    }
    @GetMapping("/job_list")
    public String jobList() {
        return "job_list";
    }
    @GetMapping("/offer")
    public String offerPage() {
        return "offer";
    }
}
