package com.amazonclone.mongospring.controllers;

import com.amazonclone.mongospring.model.DailyDeal;
import com.amazonclone.mongospring.services.DailyDealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/DailyDeals")
public class DailyDealController {

    private final DailyDealService dailyDealService;

    @Autowired
    public DailyDealController(DailyDealService dailyDealService) {
        this.dailyDealService = dailyDealService;
    }

    @GetMapping
    public List<DailyDeal> getAllDailyDeals() {
        return dailyDealService.getAllDailyDeals();
    }
}
