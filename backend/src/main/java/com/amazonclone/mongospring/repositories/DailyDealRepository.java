package com.amazonclone.mongospring.repositories;

import com.amazonclone.mongospring.model.DailyDeal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DailyDealRepository extends MongoRepository<DailyDeal, String> {
}
