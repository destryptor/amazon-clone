package com.amazonclone.data.mongospring.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.amazonclone.data.mongospring.model.DailyDeal;

public interface DailyDealRepository extends MongoRepository<DailyDeal, String> {
}
