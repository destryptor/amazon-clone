package com.amazonclone.mongospring.services;

import com.amazonclone.mongospring.model.DailyDeal;
import com.amazonclone.mongospring.repositories.DailyDealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyDealService {

    private final DailyDealRepository dailyDealRepository;

    @Autowired
    public DailyDealService(DailyDealRepository dailyDealRepository) {
        this.dailyDealRepository = dailyDealRepository;
    }

    public List<DailyDeal> getAllDailyDeals() {
        return dailyDealRepository.findAll();
    }

    public DailyDeal saveDailyDeal(DailyDeal dailyDeal) {
        return dailyDealRepository.save(dailyDeal);
    }
}
