package com.amazonclone.data.mongospring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonclone.data.mongospring.model.DailyDeal;
import com.amazonclone.data.mongospring.services.DailyDealService;

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
